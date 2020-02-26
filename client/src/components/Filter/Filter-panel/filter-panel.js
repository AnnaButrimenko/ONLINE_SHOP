import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  withWidth
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RangeSlider from '../Range/range'
import { getFilterProducts } from '../../../redux/actions/filter';

import useStyles from './_filter-panel';

const FilterPanel = (props) => {
  const classes = useStyles();
  const { name, filterResults, getFilterProducts, max, colors, brands, width } = props;

  const isShowPanel = {
    md: 'true',
    lg: 'true',
    xl: 'true'
  };

  const handleChange = (event) => {
    let currentRange = [];
    let newFilters = {};
    if (filterResults[name.toLowerCase()]) {
      currentRange = [...filterResults[name.toLowerCase()]];
      if (event.target.checked) {
        currentRange.push(event.target.value);
      } else {
        const idx = currentRange.findIndex((el) => el === event.target.value);
        currentRange = [
          ...currentRange.slice(0, idx),
          ...currentRange.slice(idx + 1)
        ];
      }
    } else {
      currentRange.push(event.target.value)
    }
    newFilters = {
      ...filterResults,
      [name.toLowerCase()]: currentRange,
    };

    getFilterProducts(newFilters);
  };

  const panelFilters = (item, values) => (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" column="true">
        {item.map((el) => (
          <FormControlLabel
            style={{ color: `${el.cssValue}` }}
            key={el.name}
            value={el.name}
            control={<Checkbox checked={values.includes(el.name)} style={{ color: `${el.cssValue}` }} />}
            label={el.name}
            name={el.name}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
  return (
    <div>
      <ExpansionPanel className={classes.root} square defaultExpanded={Boolean(isShowPanel[width])}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title}>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {name === 'Color' && panelFilters(colors, filterResults.color)}
          {name === 'Brand' && panelFilters(brands, filterResults.brand)}
          {name === 'Price' && <RangeSlider max={max} />}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterResults: state.filterReducer.filterResults
});

const mapDispatchToProps = {
  getFilterProducts
};

FilterPanel.propTypes = {
  name: PropTypes.string.isRequired,
  max: PropTypes.number,
  filterResults: PropTypes.objectOf(PropTypes.array).isRequired,
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  brands: PropTypes.arrayOf(PropTypes.object).isRequired,
  getFilterProducts: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};

FilterPanel.defaultProps = {
  max: null,
};

const filterPanel = withWidth()(FilterPanel);

export default connect(mapStateToProps, mapDispatchToProps)(filterPanel)
