declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DATABASENAME: string;
    DATABASEUSER: string;
    DATABASEPASSWORD: string;
  }
}
