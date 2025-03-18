import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataItem {
  category: string;
  groupA: number;
  groupB: number;
}

const data: DataItem[] = [
  { category: "A", groupA: 30, groupB: 50 },
  { category: "B", groupA: 80, groupB: 40 },
  { category: "C", groupA: 45, groupB: 60 },
  { category: "D", groupA: 60, groupB: 80 },
];

const GroupedBarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 500;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 50 };

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, width - margin.left - margin.right])
      .padding(0.2);

    const x1 = d3
      .scaleBand()
      .domain(["groupA", "groupB"])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.groupA, d.groupB))!])
      .nice()
      .range([height - margin.top - margin.bottom, 0]);

    const color = d3.scaleOrdinal(["#1f77b4", "#ff7f0e"]).domain(["groupA", "groupB"]);

    // X-axis
    svg.append("g")
      .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x0));

    // Y-axis
    svg.append("g").call(d3.axisLeft(y));

    // Grouped bars
    const categoryGroups = svg
      .selectAll(".category-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "category-group")
      .attr("transform", (d) => `translate(${x0(d.category)}, 0)`);

    categoryGroups
      .selectAll("rect")
      .data((d) => [
        { key: "groupA", value: d.groupA },
        { key: "groupB", value: d.groupB },
      ])
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.key)!)
      .attr("y", (d) => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", (d) => height - margin.top - margin.bottom - y(d.value))
      .attr("fill", (d) => color(d.key)!);

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default GroupedBarChart;
