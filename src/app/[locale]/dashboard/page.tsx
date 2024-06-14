"use client";
import Sortable from "sortablejs";
import { useEffect, useRef } from "react";
import { HolderOutlined } from "@ant-design/icons";
import Chart from "@/components/Chart";

import boardList from "./board";
import styles from "./page.module.less";

export default function Dashboard() {
  const boardContainerRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      const sortable = new Sortable(
        document.querySelector("#dashboard") as HTMLElement,
        {
          handle: ".moveBtn",
          animation: 150
        }
      );
    }, 1000);
  }, [boardContainerRef]);

  return (
    <main className={styles.dashboardWrap}>
      <div className={styles.content} id="dashboard">
        {boardList.map((v, i) => {
          return (
            <div
              key={i}
              style={{ width: v.w, height: v.h }}
              className={styles.card}
            >
              <span className="moveBtn">
                <HolderOutlined />
              </span>
              <Chart data={v.data} type={v.type} id={v.id} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
