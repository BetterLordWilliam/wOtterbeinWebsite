# Creations
CREATE TABLE test_table (
	ID int auto_increment NOT NULL,
	RandomText varchar(100),
    PRIMARY KEY (ID)
);

# Insertions
INSERT INTO test_table (
	RandomText
) VALUES (
	'Hello my good sir'
); # DONE

INSERT INTO test_table (
	RandomText
) VALUES (
	'I love you...'
); # DONE

# Manipulation commands
DROP TABLE test_table;
DELETE FROM test_table WHERE ID = 1;

# Misc
show tables;
select * from test_table;