# Meta Database Migration Scripts

## Prerequisites
The migration scripts in this folder have been tested on the node version present in the .node-version file.

## Use Knex.js for meta database migration

Knex.js is used to manage meta database migration. It is capable of moving the schema of the database up, down or a specific version.

See: [https://knexjs.org/#Migrations](https://knexjs.org/#Migrations) for how to use Knex.

### Initialize Node environment
```bash
npm i
```

#### Create dotenv environment file

Use `.env.example` as template to create a `.env` file specific to the environment you want to run the Node script (local, staging...)

### Create a migration script

Running the following command will create a `<timestamp>_<migration_name>.cjs` file under folder `migrations`.

```bash
npx knex --esm migrate:make <migration_name>
```

It looks like
```
exports.up = function(knex) {

};

exports.down = function(knex) {

};
```

Fill in `up` and `down` functions to define the migration in this version.

### Execute migration script at local

There are 4 main commands you can use: 
- `latest` - run all of migrations that have not yet been run
- `rollback` - rollback the last batch of migrations
- `up` - run the next migration that has not yet been run
- `down` - undo the last migration that was run

For example,
```Bash
npx knex --esm migrate:latest
```

### Test migration AWS Lambda function at local

```Bash
node local.js latest
```

The 4 supported operations are:
- latest
- rollback
- up
- down

### Test migration AWS Lambda function in AWS Cloud
To be done.

