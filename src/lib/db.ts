import Surreal from 'surrealdb.js';

export const db = new Surreal('https://evie-makeup.fly.dev/rpc');

async function main() {
	try {
		// Signin as a namespace, database, or root user
		await db.signin({
			user: 'internal',
			pass: 'zing856spam'
		});

		await db.use({ ns: 'sanskrit', db: 'main' });

		console.info(db);
	} catch (e) {
		console.error('ERROR', e);
	}
}

main();
