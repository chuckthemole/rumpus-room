from decouple import config

class RumpusConfig:
    '''
    Check if all necessary env variables are present
    '''
    def __init__(self, env_file=None):
        self.check_env_variables()
        # self.check_env_file()

    def check_env_file(self):
        # check if env file is present and specified variables are present
        # if not, raise an exception
        # config_path = Path(__file__).resolve().parent.parent.parent / '.env'
        # if not config_path.exists():
        #     raise Exception('No .env file found in the root directory. Please create one and add the necessary variables.')
        pass

    def check_env_variables(self):
        # check if all necessary env variables are present
        if not config('SECRET_KEY', default=None):
            raise Exception('SECRET_KEY env variable not found. Please add it.')
        elif not config('ALLOWED_HOSTS', default=None):
            raise Exception('ALLOWED_HOSTS env variable not found. Please add it.')
        elif not config('DB_NAME', default=None):
            raise Exception('DB_NAME env variable not found. Please add it.')
        elif not config('DB_USER', default=None):
            raise Exception('DB_USER env variable not found. Please add it.')
        elif not config('DB_PASSWORD', default=None):
            raise Exception('DB_PASSWORD env variable not found. Please add it.')
        elif not config('DB_HOST', default=None):
            raise Exception('DB_HOST env variable not found. Please add it.')
        elif not config('DB_PORT', default=None):
            raise Exception('DB_PORT env variable not found. Please add it.')
        elif not config('AWS_ACCESS_KEY', default=None):
            raise Exception('AWS_ACCESS_KEY env variable not found. Please add it.')
        elif not config('AWS_SECRET_KEY', default=None):
            raise Exception('AWS_SECRET_KEY env variable not found. Please add it.')
        elif not config('AWS_BUCKET', default=None):
            raise Exception('AWS_BUCKET env variable not found. Please add it.')
        elif not config('AWS_PATH_TO_STATIC', default=None):
            raise Exception('AWS_PATH_TO_STATIC env variable not found. Please add it.')