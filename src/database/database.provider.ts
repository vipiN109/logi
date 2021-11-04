import * as mongoose from 'mongoose'
import { ConfiguarationService } from 'src/shared/configaration/configaration.service';
import { Configuaration } from 'src/shared/configaration/configuaration.enum';

export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (_config:ConfiguarationService): Promise<typeof mongoose> =>
        mongoose.connect(Configuaration.MONGO_URL),
        Inject:[ConfiguarationService],
    },
  ];