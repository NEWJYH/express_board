export class IndustryController {
  constructor(industryService) {
    this.industryService = industryService;
  }

  findOne = async (req, res) => {
    console.log(req.params);
    try {
      const { id } = req.params;

      const result = await this.industryService.findOne(parseInt(id));

      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json("something went wrong");
    }
  };

  createIndustry = async (req, res) => {
    try {
      const industryDto = req.body;
      const id = await this.industryService.createIndustry(industryDto);
      console.log(id);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
      res.status(500).json("something went wrong");
    }
  };
}
