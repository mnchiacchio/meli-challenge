const { asClass, createContainer, asFunction, asValue } = require("awilix");

const StartUp = require("./startUp");
const Server = require("./server");
const config = require("./config/environments");

const Routes = require("./routes");
const ItemRoutes = require("./routes/items");

const { ItemService, CategoryService } = require("./infrastructure/services");

const { ItemController } = require("./controllers");

const { ItemRepository } = require("./domain/repository");

const { AuthorModel, PriceModel, ItemModel, ItemDetailModel } = require("./domain/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asClass(Routes).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    ItemRoutes: asFunction(ItemRoutes).singleton(),
  })
  .register({
    ItemRepository: asClass(ItemRepository).singleton(),
  })
  .register({
    ItemModel: asClass(ItemModel),
    ItemDetailModel: asClass(ItemDetailModel),
    PriceModel: asClass(PriceModel),
    AuthorModel: asClass(AuthorModel),
  })
  .register({
    ItemService: asClass(ItemService).singleton(),
    CategoryService: asClass(CategoryService).singleton(),
  })
  .register({
    ItemController: asClass(ItemController).singleton(),
  });

module.exports = container;
