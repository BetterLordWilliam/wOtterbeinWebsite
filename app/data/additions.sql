## ADDING RANDOM STUFF

select * from projects;

ALTER TABLE projects ADD ProjAddDate date;

UPDATE projects SET ProjAddDate='2023-12-30' WHERE ID=4;
