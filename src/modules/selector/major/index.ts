import { selector, selectorFamily } from "recoil";
import major from "../../../lib/api/majorClub";
import { MajorDetailType, MajorListType } from "../../../lib/interface/major";

export const majorListSelector = selector<MajorListType[]>({
  key: "majorDetailSelector/get",
  get: async () => {
    try {
      const res = await major.getMajorList();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const majorDetailSelector = selectorFamily<MajorDetailType, number>({
  key: "majorDetailSelector/get",
  get: (id) => async () => {
    try {
      const res = await major.getMajorDetail(id);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});
