const server = require('./app');
const port = process.env.PORT || 3001;
const { initReferenceData } = require('../util/initReferenceData');


server.listen(port, () => {
  initReferenceData()
  console.log(`Api rodando na porta ${process.env.PORT}`);
});