import {objectGroup, areaChart} from 'react-icons-kit/fa'
//import {code} from 'react-icons-kit/iconic/code'
import {tree} from 'react-icons-kit/icomoon/tree'
import {play2} from 'react-icons-kit/icomoon/play2'
import {folderOpen} from 'react-icons-kit/icomoon/folderOpen'
import {stack} from 'react-icons-kit/icomoon/stack'
import {cloudDownload} from 'react-icons-kit/icomoon/cloudDownload'
import {cloudUpload} from 'react-icons-kit/icomoon/cloudUpload'

const Featuredata = [
  {
    id: 1,
    Icon: folderOpen,
    IconB: objectGroup,
    title: 'Data repository',
    content: 'Versioning of data and analysis files. Enables cross-project reusability of data artifacts and results.'
  },
  {
    id: 2,
    Icon: tree,
    IconB: play2,
    title: 'Preconfigured Pipelines',
    content: 'Excute public pipelines by the community or build your own using various common workflow languages. Build and test locally and excute on your on-premise cluster or scale-out to cloud platforms.'
  }
]

const Featuredata1 = [
  {
    id: 1,
    Icon: areaChart,
    IconB: stack,
    title: 'Vivid visualizations',
    content: 'Integrated genome browser and variant inspector invite exploration and make your data tangible. The modern technology stack ensures short latencies even for considerable data volumes.'
  },
  {
    id: 2,
    Icon: cloudDownload,
    IconB: cloudUpload,
    title: 'Fully containerized offline capabilities',
    content: 'Configure your project\'s workspace while connected to a network and automatically download required tools and cache annotation data for offline use. Sync your presets to kickstart creation of similar environments.'
  }
]

export { Featuredata, Featuredata1 }
