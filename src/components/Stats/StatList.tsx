import { AppState } from "../../types/store-types";
import { AGE_CATEGORY } from "../../constants/age-category";

import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

import MainPlot from "./MainPlot";
import AgePlot from "./AgePlot";
import FoodPlot from "./FoodPlot";

const StatList = () => {
  const guests = useSelector((state: AppState) => state.guests.guestList);

  const stats = {
    mainPlotData: { yes: 0, no: 0, noReply: 0 },
    agePlotData: {
      cat0: 0,
      cat1: 0,
      cat2: 0,
      cat3: 0,
    },
    foodPlotData: {
      normal: 0,
      special: 0,
    },
  };

  const _countStats = () => {
    guests.forEach((guest) => {
      if (!guest.didReply) {
        stats.mainPlotData.noReply++;
        return;
      } else if (guest.isComing) {
        stats.mainPlotData.yes++;
      } else {
        stats.mainPlotData.no++;
        return;
      }

      if (guest.foodDiabetic || guest.foodGlutenFree || guest.foodLactoseFree) {
        stats.foodPlotData.special++;
      } else {
        stats.foodPlotData.normal++;
      }

      stats.agePlotData.cat3++;

      if (guest.partner) {
        stats.agePlotData.cat3++;
        if (
          guest.partner.foodDiabetic ||
          guest.partner.foodGlutenFree ||
          guest.partner.foodLactoseFree
        ) {
          stats.foodPlotData.special++;
        } else {
          stats.foodPlotData.normal++;
        }
      }

      guest.children.forEach((child) => {
        // hacky but works :)
        switch (true) {
          case child.age <= AGE_CATEGORY[0].ageMax:
            stats.agePlotData.cat0++;
            break;
          case child.age <= AGE_CATEGORY[1].ageMax:
            stats.agePlotData.cat1++;
            break;
          case child.age <= AGE_CATEGORY[2].ageMax:
            stats.agePlotData.cat2++;
            break;
          default:
            stats.agePlotData.cat3++;
            break;
        }

        if (
          child.foodDiabetic ||
          child.foodGlutenFree ||
          child.foodLactoseFree
        ) {
          stats.foodPlotData.special++;
        } else {
          stats.foodPlotData.normal++;
        }
      });
    });
  };

  _countStats();
  
  return (
    <Card>
      <Card.Header>
        <Card.Title>Stats</Card.Title>
      </Card.Header>
      <Card.Body>
        <MainPlot
          yes={stats.mainPlotData.yes}
          no={stats.mainPlotData.no}
          noReply={stats.mainPlotData.noReply}
        />
        <AgePlot
          cat0={stats.agePlotData.cat0}
          cat1={stats.agePlotData.cat1}
          cat2={stats.agePlotData.cat2}
          cat3={stats.agePlotData.cat3}
        />
        <FoodPlot
          normal={stats.foodPlotData.normal}
          special={stats.foodPlotData.special}
        />
      </Card.Body>
    </Card>
  );
};

export default StatList;
