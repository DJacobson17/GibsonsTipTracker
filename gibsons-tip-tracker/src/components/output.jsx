import { use, useEffect, useState } from "react";
import { usePost } from "./postContent";

function Output() {
  const { ccTips, cashTips, busser } = usePost();

  const totalTips = Number(ccTips) + Number(cashTips);
  console.log(totalTips);

  const [barTips, setBarTips] = useState(0);
  console.log(barTips);
  const [busserTips, setBusserTips] = useState(0);
  const [runnerTips, setRunnerTips] = useState(0);

  const netTips = totalTips - busserTips - barTips - runnerTips;

  useEffect(
    function () {
      setBarTips(Math.ceil(totalTips * 0.05).toFixed(2));
      setBusserTips(Math.ceil(totalTips * (busser / 100)).toFixed(2));
      setRunnerTips(Math.ceil(totalTips * 0.05).toFixed(2));
    },
    [totalTips, busser]
  );
  return (
    <div className="output">
      <h2 className="outputGroup">Total Tips: ${totalTips.toFixed(2)}</h2>
      <h2 className="outputGroup">
        Busser Tips:
        <input
          id="busser"
          type="number"
          step={1}
          value={busserTips}
          onChange={(event) => setBusserTips(event.target.value)}
        />
      </h2>
      <h2 className="outputGroup">
        Runner Tips:{" "}
        <input
          id="runner"
          type="number"
          step={1}
          value={runnerTips}
          onChange={(event) => setRunnerTips(event.target.value)}
        />
      </h2>
      <h2 className="outputGroup">
        Bar Tips:
        <input
          id="bar"
          type="number"
          step={1}
          value={barTips}
          onChange={(event) => setBarTips(event.target.value)}
        />
      </h2>
      <h2 className="outputGroup">Net Tips: ${netTips.toFixed(2)}</h2>
    </div>
  );
}

export default Output;
