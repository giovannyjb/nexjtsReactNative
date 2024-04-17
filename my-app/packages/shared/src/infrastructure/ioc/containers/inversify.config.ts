import "reflect-metadata";
import { Container } from "inversify";
import { servicesModule } from "./services/serviceconteiner.module";
import { networkModule } from "./network/networkcontainer.module";
import { repositoryModule } from "./repositories/repositorycontainer.module";
import { usecasesModule } from "./usecases/usecasescontainer.module";


// Contenedor principal
const appContainer = new Container();
appContainer.load(servicesModule);
appContainer.load(networkModule);
appContainer.load(repositoryModule);
appContainer.load(usecasesModule);
export { appContainer };
