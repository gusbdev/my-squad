import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'teams',
      columns: [{name: 'name', type: 'string'}],
    }),
    tableSchema({
      name: 'players',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'birthday', type: 'string'},
        {name: 'df', type: 'string'},
        {name: 'position', type: 'string'},
        {name: 'tech_desc', type: 'string'},
      ],
    }),
  ],
});
