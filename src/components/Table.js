import React from "react";

import "react-table";

export default function Table() {
  // Use the state and functions returned from useTable to build your UI

  return (
    <table className="table5">
      <thead className="thead5">
        <tr>
          <th>Place of interest</th>
          <th>Category</th>
          <th>Time / Distance</th>
        </tr>
      </thead>

      <tbody className="tbody5">
        <tr>
          <td>
            <a
              href="http://cuba-explore.com/restaurants/view/715"
              target="_blank"
              rel="noreferrer noopener"
            >
              Casa de la musica (Miramar)
            </a>
          </td>
          <td>
            <a
              href="http://cuba-explore.com/restaurants/view/715"
              target="_blank"
              rel="noreferrer noopener"
            >
              Nightclub
            </a>
          </td>
          <td>
            <a
              href="http://cuba-explore.com/restaurants/view/715"
              target="_blank"
              rel="noreferrer noopener"
            >
              10 min / 4.4 km
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a
              href="http://www.fac.cu/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Fabrica de Arte Cubano
            </a>
          </td>
          <td>
            <a
              href="http://www.fac.cu/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Avenue / Art Gallery / Nightclub
            </a>
          </td>
          <td>
            <a
              href="http://www.fac.cu/"
              target="_blank"
              rel="noreferrer noopener"
            >
              9 min / 5 km
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g147271-d3170437-Reviews-Centro_Cultural_El_Sauce-Havana_Ciudad_de_la_Habana_Province_Cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              El Sauce{" "}
            </a>
          </td>
          <td>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g147271-d3170437-Reviews-Centro_Cultural_El_Sauce-Havana_Ciudad_de_la_Habana_Province_Cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Restaurant / Nightclub
            </a>
          </td>
          <td>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g147271-d3170437-Reviews-Centro_Cultural_El_Sauce-Havana_Ciudad_de_la_Habana_Province_Cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              4 min / 2 km
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a
              href="https://www.lahabana.com/guide/teatro-karl-marx/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Karl Marx Theater{" "}
            </a>
          </td>
          <td>
            <a
              href="https://www.lahabana.com/guide/teatro-karl-marx/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Avenue
            </a>
          </td>
          <td>
            <a
              href="https://www.lahabana.com/guide/teatro-karl-marx/"
              target="_blank"
              rel="noreferrer noopener"
            >
              8 min / 4.1 km
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Tropicana_Club"
              target="_blank"
              rel="noreferrer noopener"
            >
              Tropicana{" "}
            </a>
          </td>
          <td>
            <a
              href="https://www.cabaret-tropicana.com/en/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Cabaret / Night Shows
            </a>
          </td>
          <td>
            <a
              href="https://www.cabaret-tropicana.com/en/"
              target="_blank"
              rel="noreferrer noopener"
            >
              9 min / 3.9 km
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a
              href="https://www.lahabana.com/guide/don-cangrejo-2/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Don Cangrejo{" "}
            </a>
          </td>
          <td>
            <a
              href="https://www.lahabana.com/guide/don-cangrejo-2/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live music by the sea / Nightclub
            </a>
          </td>
          <td>
            <a
              href="https://www.lahabana.com/guide/don-cangrejo-2/"
              target="_blank"
              rel="noreferrer noopener"
            >
              8 min / 3.7 km
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a
              href="https://cubanews.de/en/things-to-do-in-havana-fusterlandia/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Fusterlandia{" "}
            </a>
          </td>
          <td>
            <a
              href="https://perfectdaytoplay.com/fusterlandia-jaimanitas-havana-cuba/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Art Gallery
            </a>
          </td>
          <td>
            <a
              href="https://perfectdaytoplay.com/fusterlandia-jaimanitas-havana-cuba/"
              target="_blank"
              rel="noreferrer noopener"
            >
              8 min / 5.2 km
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="http://www.hemingwaycuba.com/marina-hemingway-cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Marina Hemingway
            </a>
          </td>
          <td>
            <a
              href="http://www.hemingwaycuba.com/marina-hemingway-cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Historic place
            </a>
          </td>
          <td>
            <a
              href="http://www.hemingwaycuba.com/marina-hemingway-cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              10 min / 6.3 km
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
