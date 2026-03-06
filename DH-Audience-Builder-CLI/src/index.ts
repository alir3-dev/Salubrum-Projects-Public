import yargs from 'yargs';
import { AudienceBuilder } from './audience-builder';

const argv = yargs
  .command('build', 'Build audience by persona', {
    persona: {
      description: 'the persona to build an audience for',
      alias: 'p',
      type: 'string',
    },
  })
  .help()
  .argv;

if (argv._[0] === 'build') {
  const audienceBuilder = new AudienceBuilder();
  const filters = audienceBuilder.getPersonaFilters(argv.persona);
  audienceBuilder.buildAudience(filters);
}
