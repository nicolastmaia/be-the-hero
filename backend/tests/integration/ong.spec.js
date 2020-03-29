const request = require('supertest'); //O supertest tem a mesma funçao que o axios tem no front (fazer requisiçoes à API), mas voltado para testes.
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to create a new ONG', async () => {
		const response = await request(app)
			.post('/ongs') // para add um campo "Authorization" no header bastaria fazer um set('Authorization', '17bds93b') concatenado com esse post()
			.send({
				name: 'ccc',
				email: 'b@a.com',
				whatsapp: '00000000000',
				city: 'bbb',
				uf: 'RJ'
			});
		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	});
});
