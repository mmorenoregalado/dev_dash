export interface DevdashConfig {
	github_access_token: string;
	widgets: {
		id: string;
		repository_url: string;
	}[];
}

export const config: DevdashConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "71b2b455-9698-4805-ab6b-f1b1059f89aa",
			repository_url: "https://github.com/mmorenoregalado/vue-tooltipper",
		},
		{
			id: "12976f91-9821-45ad-9cc2-c29e3ff956ea",
			repository_url: "https://github.com/mmorenoregalado/vue-tooltipper",
		},
		{
			id: "d6d58f2a-8e87-44de-8719-0011cc361251",
			repository_url: "https://github.com/mmorenoregalado/vue-tooltipper",
		},
	],
};
