import { iconsNode } from '@/components/icons/icon-node'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Technologies() {
  const technologies = {
    frontend: [
      'bootstrap',
      'cypress',
      'javascript',
      'nextjs',
      'react',
      'tailwind',
      'typescript',
      'vite',
      'zod',
    ],
    backend: [
      'fastify',
      'flask',
      'golang',
      'javascript',
      'nodejs',
      'python',
      'typescript',
      'zod',
    ],
    database: ['prisma'],
    devops: [
      'aws',
      'cloudflare',
      'docker',
      'git',
      'gitea',
      'github',
      'githubactions',
      'traefik',
    ],
  }

  return (
    <section id="technologies" className="flex flex-col gap-5 py-6 md:py-16">
      <h1 className="section-title">Technologies</h1>

      <Tabs
        defaultValue="frontend"
        className="mx-auto w-full sm:w-3/5 lg:w-2/5"
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="frontend">Front-End</TabsTrigger>
          <TabsTrigger value="backend">Back-End</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="dev_ops">DevOps</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 *:fill-zinc-50">
            {technologies.frontend.map(technology => (
              <div
                key={technology}
                className="*:size-12 sm:*:size-14 md:*:size-16"
              >
                {iconsNode[technology]}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="backend">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 *:fill-zinc-50">
            {technologies.backend.map(technology => (
              <div
                key={technology}
                className="*:size-12 sm:*:size-14 md:*:size-16"
              >
                {iconsNode[technology]}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="database">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 *:fill-zinc-50">
            {technologies.database.map(technology => (
              <div
                key={technology}
                className="*:size-12 sm:*:size-14 md:*:size-16"
              >
                {iconsNode[technology]}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="dev_ops">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 *:fill-zinc-50">
            {technologies.devops.map(technology => (
              <div
                key={technology}
                className="*:size-12 sm:*:size-14 md:*:size-16"
              >
                {iconsNode[technology]}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
