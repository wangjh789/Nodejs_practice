const request = require('supertest')
const {sequelize} = require('../models')
const app = require('../app')

beforeAll(async ()=>{
  await sequelize.sync()
})

describe('POST/join',()=>{
  test('로그인 안했으면 가입',(done)=>{
    request(app)
    .post('/auth/join')
    .send({
      email:'zerocho@gmail.com',
      nick:'zerocho',
      password:'nodejsbook',
    })
    .expect('Location','/')
    .expect(302,done)
  })
})

describe('POST/join',()=>{
  const agent = request.agent(app);

  beforeEach((done)=>{
    agent
    .post('/auth/login')
    .send({
      email:'zerocho@gmail.com',
      password:'nodejsbook',
    })
    .end(done);
  })

  test('이미 로그인헀으면 redirect /',(done)=>{
    const message = encodeURIComponent('로그인한 상태입니다.');
    agent
      .post('/auth/join')
      .send({
        email:'zerocho@gmail.com',
        nick:'zerocho',
        password:'nodejsbook',
      })
      .expect('Location',`/?error=${message}`)
      .expect(302,done)
  })
})

describe("POST/login",()=>{
  test('가입되지 않은 회원',async(done)=>{
    const message = encodeURIComponent('가입되지 않은 회원입니다.')
    request(app)
      .post('/auth/login')
      .send({
        email:'zerocho1@gmail.com',
        password:'nodejsbook',
      })
      .expect('Location',`/?loginError=${message}`)
      .expect(302,done);
  })

  test('로그인 수행',async (done)=>{
    request(app)
      .post('/auth/login')
      .send({
        email:'zerocho@gmail.com',
        password:'nodejsbook',
      })
      .expect('Location','/')
      .expect(302,done);
  })

  test('비밀번호 틀림',async(done)=>{
    const message = encodeURIComponent('비밀번호가 일치하지 않습니다.')
    request(app)
      .post('/auth/login')
      .send({
        email:'zerocho@gmail.com',
        password:'nodejsbook',
      })
      .expect('Location',`/?loginError=${message}`)
      .expect(302,done)
  })
})

afterAll(async ()=>{
  await sequelize.sync({force:true})
})


