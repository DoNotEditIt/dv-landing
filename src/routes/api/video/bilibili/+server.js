import { getWridWts } from '$lib/server/getWridWts';

export async function GET() {
	const url = `https://api.bilibili.com/x/space/wbi/arc/search?mid=473013658&ps=30&tid=0&pn=1&keyword=&order=pubdate&platform=web&web_location=1550101&order_avoided=true&${await getWridWts()}`;
	const data = new Response(
		JSON.stringify(
			await (
				await fetch(url, {
					headers: {
						'user-agent':
							'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183',
						accept:
							'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
						'accept-language': 'zh',
						'cache-control': 'no-cache',
						pragma: 'no-cache',
						'sec-ch-ua': '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
						'sec-ch-ua-mobile': '?0',
						'sec-ch-ua-platform': '"Windows"',
						'sec-fetch-dest': 'document',
						'sec-fetch-mode': 'navigate',
						'sec-fetch-site': 'none',
						'sec-fetch-user': '?1',
						'upgrade-insecure-requests': '1'
					},
					referrerPolicy: 'strict-origin-when-cross-origin',
					method: 'GET',
					credentials: 'include'
				})
			).json()
		)
	);

	data.headers.set('Content-Type', 'application/json; charset=utf-8');
	console.log(url);
	return data;
}
