import { Request } from '@models/Request';

export async function findRequestsByUser(userId) {
	return await Request.find({ fromOwner: userId });
}

export async function findByService(service) {
	return await Request.findOne({ serviceNumber: service });
}

export async function saveRequest(userId, body) {
	const {
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	} = body;

	const payload = {
		fromOwner: userId,
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	};

	const request = new Request(payload);
	await request.save();
	return request;
}

export async function updateRequestByService(service, body) {
	//const request = await findByService(service);
	return await Request.findOneAndUpdate(
		{ serviceNumber: service },
		{ ...body },
		{
			returnOriginal: false,
		},
	);
}
