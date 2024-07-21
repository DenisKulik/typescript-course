enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}

type RequestType = {
    topicId: number,
    status?: QuestionStatus
}

type ResponseItemType = {
     question: string,
     answer: string,
     tags: string[],
     likes: number,
     status: QuestionStatus
}

async function getFaqs(req: RequestType): Promise<ResponseItemType[]>{
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data: ResponseItemType[]= await res.json();
	return data;
}