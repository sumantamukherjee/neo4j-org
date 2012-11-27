
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { category: '', title: 'Learn, Develop, Participate' });
};


/*
 * GET - "download" page
 */
exports.download = function(req, res){
  res.render('download', { category: 'download', title: 'Download' });
};

/*
 * GET - "download thanks" page
 */
exports.download_thanks = function(req, res){
  res.render('download_thanks', { category: 'download_thanks', title: 'Download Thanks' });
};


/*
 * GET - "learn" information with guided tracks
 */
exports.learn = function(req, res){
  res.render('learn', { category: 'learn', title: 'Learn' });
};


/*
 * GET - "learn about neo4j" with an explanation of Neo4j as a graph database
 */
exports.neo4j = function(req, res){
  res.render('learn/neo4j', { category: 'learn', title: 'Neo4j' });
};

exports.cypher = function(req, res){
  res.render('learn/cypher', { category: 'learn', title: 'Cypher Tutorial' });
};

exports.visualize = function(req, res){
  res.render('develop/visualize', { category: 'develop', title: 'Graph Visualizations' });
};


/*
 * GET - "Neo4j apps" a showcase of live apps
 */
exports.apps = function(req, res){
  res.render('learn/apps', { category: 'learn', title: 'Apps' });
};



/*
 * GET - "Neo4j Licensing" guide to how we think about dual license
 */
exports.license = function(req, res){
  res.render('learn/licensing', { category: 'learn', title: 'Editions & Licensing Guide' });
};

exports.graphdb = function(req, res){
  res.render('learn/graphdatabase', { category: 'learn', title: 'What is a Graph Database' });
};

/*
 * GET - "NOSQL Datamodel" of Neo4j vs. other databases
 */
exports.nosql = function(req, res){
  res.render('learn/nosql', { category: 'learn', title: 'NOSQL Data Models' });
};


/*
 * GET - "watch" screencasts and other video content
 */
exports.watch = function(req, res){
  res.render('watch', { category: 'learn', title: 'Watch' });
};


/*
 * GET - "develop" applications using Neo4j
 */
exports.develop = function(req, res){
  res.render('develop', { category: 'develop', title: 'Develop' });
};


/*
 * GET - "heroku" managed Neo4j on Heroku's PaaS
 */
exports.heroku = function(req, res){
  res.render('develop/heroku', { category: 'develop', title: 'Heroku Add-on' });
};

exports.spring = function(req, res){
    res.render('develop/spring', { category: 'develop', title: 'Spring Data Neo4j' });
};


/*
 * GET - "ec2" DIY deployment on Amazon's EC2
 */
exports.ec2 = function(req, res){
  res.render('develop/ec2', { category: 'develop', title: 'DIY EC2' });
};


/*
 * GET - "spring" everything you need to know about SDN
 */
exports.spring = function(req, res){
  res.render('develop/spring', { category: 'develop', title: 'Spring Data Neo4j' });
};

/*
 * GET - "drivers" with languages and frameworks
 */
exports.drivers = function(req, res){
  res.render('develop/drivers', { category: 'develop', title: 'Language Drivers' });
};

exports["try"] = function(req, res){
  res.render('learn/try', { category: 'learn', title: 'Try Neo4j' });
}

exports.install = function(req, res){
  res.render('develop/install', { category: 'install', title: 'Installation' });
};

exports.participate = function(req, res){
  res.render('participate', { category: 'participate', title: 'Participate' });
};

exports.contributors = function(req, res){
    res.render('participate/contributors', { category: 'contributors', title: 'Contributors' });
};
exports.example_data = function(req, res){
    res.render('develop/example_data', { category: 'develop', title: 'Sample Datasets' });
};

exports.d3 = function(req, res){
    res.render('d3', { category: 'develop', title: 'Sample Datasets' });
};

exports.test = function(req, res){
    res.render('test', { category: 'develop', title: 'Test' });
};
/*
 * GET - "terms" and "privacy"
 */
exports.terms = function(req, res){
  res.render('terms', { category: 'terms', title: 'Terms' });
};
exports.privacy = function(req, res){
  res.render('privacy', { category: 'privacy', title: 'Privacy' });
};