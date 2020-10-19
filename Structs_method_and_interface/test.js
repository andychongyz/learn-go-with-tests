//  [[0,3,3],[0,0,0],[0,1,4]]
var init_vert_counters = function (array_len) {
  var vert_counters = array();
  // to set cert
  var i = 0;
  while (i < array_len) {
    vert_counters = insert(vert_counters, 0, 0);
    i = i + 1;
  }

  return vert_counters;
};

var count_chains = function (array) {
  // array = 2 dimensional array
  var num_of_chain = 0;
  var vert_counters = init_vert_counters(length(get(array, 0)));

  // return if empty array
  if (length(get(array, 0) == 0) {
    return 0;
  }

  var i = 0;
  while (i < length(array)) {
    var j = 0;
    var row = get(array, i);

    print(row);

    var hor_counter = 0;
    while (j < length(row)) {
      // check horizontal, skip col 0
      if (j != 0) {
        // if current col val == previous col value
        var col = get(row, j);
        var prev_col = get(row, j - 1);
        if (col == prev_col) {
          // then increment hor_counter
          hor_counter = hor_counter + 1;
          // increment num_of_chain when hor_counter hits 3 (horizontal chain is formed)
          if (hor_counter == 3) {
            num_of_chain = num_of_chain + 1;
          }
        } else {
          // else reset hor_counter
          hor_counter = 0;
        }
      }

      // check vertical, skip row 0
      if (i != 0) {
        var prev_row = get(array, i - 1);

        var col = get(row, j);
        var prev_row_col = get(prev_row, j);

        if (col == prev_row_col) {
          // then increment vert_counters[j] (j = current col)
          vert_counters = set(vert_counters, j, get(vert_counters, j) + 1);
          // increment num_of_chain when vert_counters[j] hits 3 (vertical chain is formed)
          if (get(vert_counters, j) == 3) {
            num_of_chain = num_of_chain + 1;
          }
        } else {
          // else reset vert_counters[j]
          vert_counters = set(vert_counters, j, 0);
        }
      }

      j = j + 1;
    }
    i = i + 1;
  }

  return num_of_chain;
};
