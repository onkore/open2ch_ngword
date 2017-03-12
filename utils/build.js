import webpack from 'webpack'
import config from '../webpack.config.babel'

webpack(config, (err) => {
  if (err) throw err
})
