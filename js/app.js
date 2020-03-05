function buildMetadata(sample) {
    var MetaData = `/metadata/${sample}`;
    // Use `d3.json` to fetch the metadata for a sample
    d3.json(MetaData).then(function(response) {
      // Use d3 to select the panel with id of `#sample-metadata`
      var panelData = d3.select("#sample-metadata");
      // Use `.html("") to clear any existing metadata
      panelData.html("");
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      var data = Object.entries(response);
      data.forEach(function(item) {
      panelData.append("div").text(item);
     });
     })}
  
      // BONUS: Build the Gauge Chart
      // buildGauge(data.WFREQ);
  
  
  function buildCharts(sample) {
  var sampleData = `/samples/${sample}`;
    // @TODO: Use `d3.json` to fetch the sample data for the plots
    d3.json(sampleData).then(function(response) {
      // @TODO: Build a Bubble Chart using the sample data
      var bubbleOtuIds = response.otu_ids;
      var bubbleOuLabels = response.otu_labels;
      var bubbleSampleValues = response.sample_values;
