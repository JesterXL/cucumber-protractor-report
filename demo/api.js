console.log('Loading restify server...');

var _ = require('lodash');
var restify = require('restify');
var api = restify.createServer({name: 'demo-starting-strength'});
var restifyPort = 9037;
console.log("Restify port I'll use:", restifyPort);
api.listen(restifyPort, function () {
    console.log('%s listening at %s', api.name, api.url)
});

api.pre(restify.CORS());
// restify.CORS.ALLOW_HEADERS.push('authorization');
api.pre(restify.fullResponse());
api.use(restify.bodyParser());
api.use(restify.queryParser());

api.get('/ping', function (req, res, next) {
    console.log("ping called");
    res.send(200, {response: true});
});

api.get('/', function(req, res) {
    console.log('default called');
    res.send(200);
});

api.post('/login', function(req, res)
{
    console.log("*** /login ***");
    try
    {
        var username = req.body.username;
        var password = req.body.password;
        if(username === 'test' && password === 'test')
        {
            res.send(200, {result: true});
        }
        else
        {
            res.send(500, {result: false, error: "For now, please use username of 'test' and password of 'test'."});
        }
    }
    catch(error)
    {
        console.error("login error:", error);
        res.send(500, {result: false, error: 'Unknown error.'});
    }
});

api.get('/isloggedin', function(req, res) {
    console.log("*** /isloggedin ***");
    res.send(200);
});

api.get('/api/workouts/today', function(req, res)
{
    console.log("*** /api/workouts/today ***");
    res.send(200, {result: true, workouts: [
    	{id: '123a', name: 'Squat', targetSets: 3, targetRepsPerSet: 5, targetWeight: 280, 
    		sets: [
    				{reps: 0, weight: 0},
    				{reps: 0, weight: 0},
    				{reps: 0, weight: 0}
    			]
    	},
    	{id: '456b', name: 'Bench Press', targetSets: 3, targetRepsPerSet: 5, targetWeight: 190, 
    		sets: [
    				{reps: 0, weight: 0},
    				{reps: 0, weight: 0},
    				{reps: 0, weight: 0}
    			]},
    	{id: '789c', name: 'Deadlift', targetSets: 1, targetRepsPerSet: 5, targetWeight: 365, 
    		sets: [
    				{reps: 0, weight: 0}
    			]}
    ]});
});

api.post('/api/workout/save', function(req, res)
{
	console.log("*** /api/workout/save ***");
	var password = req.body.workout;
	var causeError = req.body.causeError;
	if(causeError === true)
	{
		res.send(500, {result: false, error: new Error('Manual error.')});
		return;
	}
	else
	{
		res.send(200, {result: true, workout: workout});
	}
});
