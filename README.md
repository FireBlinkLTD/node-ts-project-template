# Node.js TypeScript project template generator

Allow to generate TypeScript based Node.js project with:
- TS, JSON, YAML, Git Commit Message lints
- Mocha TypeScript scaffolding with test coverage reporting
- \[Optionaly\] initialized git repository and initial commit
- \[Optionaly\] initialized Dockerfile and docker-compose.yml
- \[Optionaly\] initialized CircleCI configuration

## Usage

First, install [FBL](https://www.npmjs.com/package/fbl).

```bash
npm install -g fbl
```

Then generate your new project with single command:

```bash
fbl https://github.com/FireBlinkLTD/node-ts-project-template/archive/master.tar.gz
```

You can also pass all the options into command itself to avoid answering prompts:

```bash
fbl \
 -a \$.ctx.name=@scope/name \
 -a \$.ctx.description=Super\ Plugin \
 -a \$.ctx.author=FireBlinkLTD \
 -a \$.ctx.license=MIT \ 
 -a \$.ctx.destination=/path/to/project_dir \
 -a \$.ctx.git.init=true \
 -a \$.ctx.git.commit=true \
 -a \$.ctx.docker=true \
 https://github.com/FireBlinkLTD/node-ts-project-template/archive/master.tar.gz
```

