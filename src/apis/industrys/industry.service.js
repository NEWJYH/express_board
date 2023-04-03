// import { IndustryDAO } from "./dao/industry.dao.js";

import { Industry } from "./models/industry.model.js";

export class IndustryService {
  constructor() {}

  findOne = async (id) => {
    const industry = await Industry.query().findOne({ industry_id: id });
    return industry;
  };

  /**
   *
   * @param {{industryName:string}} industryDto
   * @returns
   */
  createIndustry = async (industryDto) => {
    const { industryName } = industryDto;
    // await IndustryDAO.findIndustry(industryName)
    // return await IndustryDAO.createIndustry(industryName);
  };
}
