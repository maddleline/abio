import React, { Component } from "react";
import getLocalTime from "../utils/getLocalTime";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "Day",
    localTime: getLocalTime(),
    jobs: [
      {
        "supervisor_job_book": "ABIODEMO",
        "supervisor_job_job": "2",
        "job_description": "Strathcona",
        "client_name": [],
        "supervisor_job_area": "1",
        "area_description": "Directs",
        "supervisor_job_gl_account": [],
        "gl_account_description": [],
        "supervisor_job_shift": "1",
        "supervisor_job_employee_employee": "1202",
        "supervisor_job_employee_trade_union": "BCLAB",
        "supervisor_job_employee_occupation": "LAFM",
        "occupation_description": "Labourer Foreman",
        "supervisor_job_supervisor": "1202",
        "actual_date": "2021-04-25 11:06:42",
        "employee_time_summary_override_flag": [],
        "employee_time_summary_elapsed_seconds": [],
        "clock_running_flag": []
     },
     {
        "supervisor_job_book": "ABIODEMO",
        "supervisor_job_job": "2",
        "job_description": "Strathcona",
        "client_name": [],
        "supervisor_job_area": "1",
        "area_description": "Directs",
        "supervisor_job_gl_account": [],
        "gl_account_description": [],
        "supervisor_job_shift": "1",
        "supervisor_job_employee_employee": "1202",
        "supervisor_job_employee_trade_union": "BCLAB",
        "supervisor_job_employee_occupation": "LAFM",
        "occupation_description": "Labourer Foreman",
        "supervisor_job_supervisor": "1204",
        "actual_date": "2021-04-25 11:06:42",
        "employee_time_summary_override_flag": [],
        "employee_time_summary_elapsed_seconds": [],
        "clock_running_flag": []
     }
    ]
  };

  toggleTheme = () => {
    console.log('toggling');
    this.setState(prevState => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme, jobs: this.state.jobs }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
