import { PrismaClient } from '@prisma/client';
import { created, notAllowed, internalServerError, ok } from '../../helpers/requestHelper';
const prisma = new PrismaClient();

export default async function handler(req, res) {
	try {
		switch (req.method) {
			case 'POST':
				return await handlePost(req, res);
			case 'GET':
				return await handleGet(req, res);
		}

		return notAllowed(res);
	}catch (e) {
		return internalServerError(res);
	}
}

async function handlePost(req, res) {
	const body = req.body;
	const user = await createUser(body);
	return created(res, user);
}

async function handleGet(req, res) {
	return ok(res, await listUsers());
}

async function createUser(user) {
	return await prisma.user.create({
		data: user
	});
}

async function listUsers() {
	return await prisma.user.findMany();
}