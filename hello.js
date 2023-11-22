app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   next();
 })
const Hello = (app) => {
app.get('/hello', (req, res) => {
    res.send('Life is good!')
 });
 app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
 });
}
export default Hello;