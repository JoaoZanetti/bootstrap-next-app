class Response {
	constructor(code = 200, data = null, error = null){
		this.code = code;
		this.data = data;
		this.error = error ? {
			message: error
		} : null;
		this.success = code < 400;
	}
}

export const ok = (res, data) => res.status(200).json(new Response(200, data))
export const created = (res, data) => res.status(201).json(new Response(201, data));
export const notAllowed = (res) => res.status(405).json(new Response(405, null, 'Method not allowed'));
export const internalServerError = (res) => res.status(500).json(new Response(500, null, 'Internal server error'));