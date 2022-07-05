import { PrismaClient } from '@prisma/client';
import { created, notAllowed, internalServerError, ok } from '../../helpers/requestHelper';
import EmailQueue from './queues/email';
import * as Sentry from "@sentry/nextjs";

const prisma = new PrismaClient();

const handler = async (req, res) => {
	try {
		switch (req.method) {
			case 'POST':
				return await handlePost(req, res);
			case 'GET':
				return await handleGet(req, res);
		}

		return notAllowed(res);
	} catch (e) {
		Sentry.captureException(e);
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
	const userDb = await prisma.user.create({
		data: user
	});
	await EmailQueue.enqueue(userDb, { delay: "1min" });
	return userDb;
}

async function listUsers() {
	return await prisma.user.findMany();
}

export default Sentry.withSentry(handler);