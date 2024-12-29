describe('Api adopet', ()=>{
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YzYxY2Q5My0zZWQxLTQ1ZjMtYTk1Zi0yYWJlOGJhNzI0NGMiLCJhZG9wdGVyTmFtZSI6IkFsaW5lIERpYXMiLCJpYXQiOjE3MzU0MjcxODIsImV4cCI6MTczNTY4NjM4Mn0.QDX8ngi1MFep0Wm0yjMHFqdZbrM1vf99yAjg_QPZaZs';

    it('Mensagens de login', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/9c61cd93-3ed1-45f3-a95f-2abe8ba7244c',
            headers:{
                authorization
            }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body.perfil.nome).to.be.equals('Aline Dias')
    })
    })
})