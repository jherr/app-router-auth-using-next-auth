import { z } from "zod"

const env = z.object({
	NEXTAUTH_URL: z.string(),
	NEXTAUTH_SECRET: z.string(),
	GITHUB_ID: z.string(),
	GITHUB_SECRET: z.string()
})

env.parse(process.env)

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof env> {}
	}
}