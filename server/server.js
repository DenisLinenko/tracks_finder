
	const express = require('express');
	const app = express();
	const port = process.env.PORT || 5000;
	var fs = require('fs');
	
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	
	
	app.listen(port, () => console.log(`Listening on port ${port}`));
	
	app.get('/all_tracks', (req, res) => {
		try{
			fs.readFile('../data.txt', 'utf8', (err, data) => {
				if (err) {
					console.error(`unable to find tracks due to ${err.stack}`);
					res.status(500).send(err);
				} else {
					try{
						const jsonData = JSON.parse(data)
						const results = Object.entries(jsonData)
						console.log('was found tracks:', results);
						
						res.status(200).send({ results });
	
					} catch(error) {
						console.error(`unable to parse data due to ${error.stack}`);
						res.status(500).send(error);
					}
				}
			});
		} catch (errorRead) {
			console.error(`unexpected error occurred due to ${errorRead.stack}`);
			res.status(500).send(errorRead);
		}
		
	});
	app.post('/track', (req, res) => {
		try{
			const { id } = req.body
			fs.readFile('../data.txt', 'utf8', (err, data) => {
				if (err) {
					console.error(`unable to find tracks due to ${err.stack}`);
					res.status(500).send(err);
				} else {
					try{
						const jsonData = JSON.parse(data)
						let array = Object.entries(jsonData) 	
				
						let results = []

						array.forEach((item) => {
							(item[0] === id) && (results.push(item))
						})
					
						if(results.length === 0) {
							console.error(`unable to find track`);
							res.status(404).send("track not found");
						} else {
							console.log('found track:', results);
							res.status(200).send({results});
						}
					} catch(error) {
						console.error(`unable to parse data due to ${error.stack}`);
						res.status(500).send(error);
					}
				}
			});

		} catch(errorFetch) {
			console.error(`unexpected error occurred due to ${errorFetch.stack}`);
			res.status(500).send(errorFetch);
		}
	});

