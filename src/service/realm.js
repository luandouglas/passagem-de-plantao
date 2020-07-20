import realm from 'realm';
import Gasometria from './Gasometria';
import Plantao from './Plantao';
import ExamesBioquimicos from './ExamesBioquimicos';

const Realm = realm.open({
  schema: [Plantao, Gasometria, ExamesBioquimicos],
  schemaVersion: 1,
});

export default Realm;
