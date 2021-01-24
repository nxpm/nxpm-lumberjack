import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit'
import { join } from 'path'

export default async function (host: Tree, schema: { name: string; target: string }) {
  const formattedNames = names(schema.name)
  await generateFiles(host, join(__dirname, 'files'), join(schema.target, schema.name), {
    ...formattedNames,
    name: schema.name,
    target: schema.target,
    tmpl: '',
  })
  await formatFiles(host)
  const { className, fileName } = formattedNames
  console.log(
    `{ path: '', loadChildren: () => import('./${fileName}/${fileName}.module').then((m) => m.${className}Module) },`,
  )
}
