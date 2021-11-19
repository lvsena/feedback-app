export class HelloWorldController {
  public async get(req, res) {
    res.send({ message: "hello world" });
  }
}
