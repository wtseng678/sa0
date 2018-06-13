// `totalSales` accepts one argument, an object containing an employee who manages
// a sales team, and returns the total sales for the entire team. Note: it is possible
// that any employee also manages a team.
//
// An employee looks like this:
//
// {
//   name: 'Fred Zirdung'
//   individualSales: 125
//   manages: [/* ... */]
// }
//
// EXAMPLE:
//

//
// returns 60



var totalSales = function (salesTeam) {
  var sum = 0;
  Object.keys(salesTeam).forEach(function(key) {
  	if (key === 'individualSales') {
  		sum += salesTeam[key];
  	} else if (key === 'manages' && salesTeam[key].length > 0) {
  		for (var i = 0; i < salesTeam[key].length; i++) {
  			sum += totalSales(salesTeam[key][i]);
  		}
  	}
  });
  return sum;
};

var salesTeam = {
  name: 'Arnaldo McDermott',
  individualSales: 14,
  manages: [
    {
      name: 'Lavina Romaguera',
      individualSales: 15,
      manages: [
        {
          name: 'Glen Hodkiewicz',
          individualSales: 12,
          manages: []
        }
      ]
    },
    {
      name: 'Rey Hills',
      individualSales: 19,
      manages: []
    }
  ]
};


console.log(totalSales(salesTeam));