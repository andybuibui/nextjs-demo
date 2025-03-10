"use client";
import { Spin } from "antd";
import { useState, useRef, useEffect } from "react";
import { checkData } from "./api";
import Chart from "@/components/Chart";

import styles from "./index.module.less";

export default function Dashboard() {
  const boardContainerRef = useRef<any>();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkData().then((res: any) => {
      setList(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <main className={styles.monitorWrap}>
      <Spin tip="数据加载中..." size="large" spinning={loading}>
        <div className={styles.content} ref={boardContainerRef}>
          {list.map((v: any, i) => {
            return (
              <div
                key={i}
                style={{ width: v.w, height: v.h }}
                className={styles.card}
              >
                <Chart data={v.data} type={v.type} id={v.id} />
              </div>
            );
          })}
        </div>
      </Spin>
    </main>
  );
}
