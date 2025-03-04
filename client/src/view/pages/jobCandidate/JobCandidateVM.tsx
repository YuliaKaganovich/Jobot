import { useEffect, useState } from "react";
import { Job } from "../../../model/jobModel";
import { useParams } from "react-router";


export function useJobCandidateVM() {
  const [job, setJob] = useState<Job>();
  const { jobId } = useParams();
  console.log(jobId);

  useEffect(() => {
    if (jobId) {
      fetchJob(jobId);
    }
  }, [jobId])

  async function fetchJob(jobId: string | undefined) {
    try {
      fetch(`http://localhost:3000/api/jobs/job/${jobId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data)
          setJob(data)
        })
        .catch((error) => console.error(error));
      // const data = data.json();
      console.log('job', job)
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  return {
    job,
    fetchJob,
  };
}
