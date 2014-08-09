
/* Define */

var EVENT_KEY_TAB    = 9,
    EVENT_KEY_ENTER  = 13,
    EVENT_KEY_SHIFT  = 16,
    EVENT_KEY_ESCAPE = 27,
    EVENT_KEY_LEFT   = 37,
    EVENT_KEY_UP     = 38,
    EVENT_KEY_RIGHT  = 39,
    EVENT_KEY_DOWN   = 40,

    OPER_GROUP_TYPE_NONE    = 1,
    OPER_GROUP_TYPE_AVERAGE = 2,
    OPER_GROUP_TYPE_SUM     = 3,

    GRAPH_TYPE_AREA   = 1,
    GRAPH_TYPE_LINE   = 2,

    STACK_MODE_NONE    = 1,
    STACK_MODE_NORMAL  = 2,
    STACK_MODE_PERCENT = 3,

    PROXY_TYPE_SERIES = 1,
    PROXY_TYPE_GROUP = 2,

    MATCH_TYPE_SINGLE = 1,
    MATCH_TYPE_GLOB   = 2,
    MATCH_TYPE_REGEXP = 3,

    UNIT_TYPE_FIXED  = 1,
    UNIT_TYPE_METRIC = 2,

    GRAPH_DEFAULT_RANGE     = '-1h',
    GRAPH_DRAW_DELAY        = 250,
    GRAPH_LEGEND_ROW_HEIGHT = 24,
    GRAPH_SPACING_SIZE      = 16,

    GRAPH_PLOTLINE_COLORS = [
        '#16a085', '#27ae60', '#2980b9', '#8e44ad',
        '#2c3e50', '#f39c12', '#d35400', '#c0392b'
    ],

    LIST_FETCH_LIMIT = 50,

    PATTERN_TEST_LIMIT = 10,

    TIME_RFC3339 = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
