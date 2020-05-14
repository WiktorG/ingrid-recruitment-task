const breakpoints = {
    xxxs: 370,
    xxs: 425,
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xlg: 1300,
    xxlg: 1700,
};

export default {
    xxxs: `(max-width: ${breakpoints.xxxs}px)`,
    xxs: `(max-width: ${breakpoints.xxs}px)`,
    xs: `(max-width: ${breakpoints.xs}px)`,
    sm: `(max-width: ${breakpoints.sm}px)`,
    md: `(max-width: ${breakpoints.md}px)`,
    lg: `(max-width: ${breakpoints.lg}px)`,
    xlg: `(max-width: ${breakpoints.xlg}px)`,
    xxlg: `(max-width: ${breakpoints.xxlg}px)`,
};
