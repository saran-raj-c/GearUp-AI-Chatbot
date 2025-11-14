// Comprehensive Mechanical Engineering Knowledge Base
const knowledge Base = {
    thermodynamics: {
        keywords: ['thermodynamics', 'heat', 'energy', 'temperature', 'entropy', 'enthalpy', 'laws of thermodynamics', 'carnot', 'rankine', 'otto', 'diesel'],
        response: `<strong>Thermodynamics</strong> is the branch of physics dealing with heat, work, and energy transformations.

<strong>Key Concepts:</strong>
<ul>
<li><strong>First Law:</strong> Energy cannot be created or destroyed, only transformed (ΔU = Q - W)</li>
<li><strong>Second Law:</strong> Entropy of an isolated system always increases; heat flows from hot to cold</li>
<li><strong>Third Law:</strong> As temperature approaches absolute zero, entropy approaches a minimum</li>
<li><strong>Zeroth Law:</strong> If two systems are in thermal equilibrium with a third, they're in equilibrium with each other</li>
<li><strong>Enthalpy (H):</strong> Total heat content of a system (H = U + PV)</li>
<li><strong>Entropy (S):</strong> Measure of system disorder or randomness</li>
</ul>

<strong>Thermodynamic Cycles:</strong>
<ul>
<li><strong>Carnot Cycle:</strong> Most efficient theoretical cycle, reversible</li>
<li><strong>Rankine Cycle:</strong> Used in steam power plants</li>
<li><strong>Otto Cycle:</strong> Used in gasoline engines</li>
<li><strong>Diesel Cycle:</strong> Used in diesel engines</li>
<li><strong>Brayton Cycle:</strong> Used in gas turbines and jet engines</li>
</ul>

<strong>Applications:</strong> Power plants, refrigeration, heat engines, HVAC systems, combustion processes, energy conversion systems`
    },

    cnc: {
        keywords: ['cnc', 'cnc machining', 'computer numerical control', 'machining', 'milling', 'turning', 'gcode', 'g-code'],
        response: `<strong>CNC Machining</strong> (Computer Numerical Control) is an automated manufacturing process where pre-programmed computer software dictates the movement of factory tools and machinery.

<strong>Key Components:</strong>
<ul>
<li><strong>CNC Mill:</strong> Rotates cutting tool while workpiece is stationary - creates complex 3D shapes</li>
<li><strong>CNC Lathe:</strong> Rotates workpiece while cutting tool is stationary - creates cylindrical parts</li>
<li><strong>CNC Router:</strong> For cutting wood, plastics, composites</li>
<li><strong>G-Code:</strong> Programming language that controls CNC machines (G00, G01, G02, G03, etc.)</li>
<li><strong>M-Code:</strong> Machine functions (M03 spindle on, M08 coolant on, etc.)</li>
</ul>

<strong>Advantages:</strong>
• High precision (±0.001" tolerance)
• Repeatability and consistency
• Complex geometry capability
• 24/7 operation
• Reduced human error

<strong>Common Operations:</strong> Drilling, boring, milling, turning, threading, facing, grooving, reaming`
    },

    cad: {
        keywords: ['cad', 'computer aided design', 'solidworks', 'autocad', 'catia', 'fusion 360', 'inventor', 'creo', 'nx', 'siemens nx'],
        response: `<strong>CAD Software</strong> (Computer-Aided Design) tools are used to create precision drawings and technical illustrations in mechanical engineering.

<strong>Popular CAD Software:</strong>
<ul>
<li><strong>SolidWorks:</strong> Industry standard, parametric modeling, assemblies, drawings</li>
<li><strong>AutoCAD:</strong> 2D/3D drafting, widely used for technical drawings</li>
<li><strong>CATIA:</strong> High-end, used in aerospace and automotive (Boeing, Airbus)</li>
<li><strong>Fusion 360:</strong> Cloud-based, integrated CAM, simulation</li>
<li><strong>Inventor:</strong> Autodesk's parametric modeler</li>
<li><strong>Creo (Pro/ENGINEER):</strong> Parametric, used in complex assemblies</li>
<li><strong>Siemens NX:</strong> Advanced CAD/CAM/CAE platform</li>
</ul>

<strong>Key Features:</strong>
• Parametric modeling
• Assembly design
• Engineering drawings (GD&T)
• Surface modeling
• Sheet metal design
• Motion simulation
• Rendering and visualization

<strong>File Formats:</strong> STEP, IGES, STL, SLDPRT, DWG, DXF, Parasolid`
    },

    cam: {
        keywords: ['cam', 'computer aided manufacturing', 'toolpath', 'manufacturing'],
        response: `<strong>CAM Software</strong> (Computer-Aided Manufacturing) converts CAD models into machine instructions (G-code) for CNC machines.

<strong>Popular CAM Software:</strong>
<ul>
<li><strong>Mastercam:</strong> Most widely used, comprehensive toolpath generation</li>
<li><strong>Fusion 360 CAM:</strong> Integrated with CAD, cloud-based</li>
<li><strong>HSMWorks:</strong> Integrated with SolidWorks</li>
<li><strong>PowerMill:</strong> High-speed machining strategies</li>
<li><strong>Edgecam:</strong> Production-focused CAM</li>
</ul>

<strong>Key Functions:</strong>
• Toolpath generation
• Post-processing (machine-specific G-code)
• Tool selection and management
• Cutting parameter optimization
• Simulation and verification
• Multi-axis machining strategies

<strong>Machining Strategies:</strong> 2.5D milling, 3D contouring, adaptive clearing, high-speed machining, 5-axis simultaneous`
    },

    cae: {
        keywords: ['cae', 'fea', 'finite element analysis', 'simulation', 'ansys', 'abaqus', 'comsol'],
        response: `<strong>CAE Software</strong> (Computer-Aided Engineering) performs engineering analysis and simulation to validate designs.

<strong>Popular CAE Tools:</strong>
<ul>
<li><strong>ANSYS:</strong> Comprehensive FEA, CFD, electromagnetics, multiphysics</li>
<li><strong>Abaqus:</strong> Advanced nonlinear FEA</li>
<li><strong>COMSOL Multiphysics:</strong> Multiphysics simulation</li>
<li><strong>SolidWorks Simulation:</strong> Integrated FEA</li>
<li><strong>Altair HyperWorks:</strong> Optimization and simulation</li>
</ul>

<strong>Analysis Types:</strong>
<ul>
<li><strong>Structural (FEA):</strong> Stress, strain, deformation analysis</li>
<li><strong>Thermal:</strong> Heat transfer, temperature distribution</li>
<li><strong>CFD:</strong> Fluid flow, aerodynamics, turbulence</li>
<li><strong>Modal:</strong> Natural frequencies, vibration modes</li>
<li><strong>Fatigue:</strong> Lifecycle prediction under cyclic loading</li>
<li><strong>Topology Optimization:</strong> Material distribution optimization</li>
</ul>

<strong>Benefits:</strong> Reduce physical prototypes, optimize designs, predict failure modes, validate performance`
    },

    materials: {
        keywords: ['materials', 'steel', 'aluminum', 'titanium', 'composite', 'polymer', 'alloy', 'material science', 'metallurgy'],
        response: `<strong>Materials Science</strong> in mechanical engineering focuses on properties, selection, and applications of engineering materials.

<strong>Common Materials:</strong>
<ul>
<li><strong>Steel:</strong> High strength, weldable, cost-effective
  • Carbon Steel (1018, 1045)
  • Stainless Steel (304, 316, 17-4 PH)
  • Tool Steel (D2, H13, M2)</li>
<li><strong>Aluminum:</strong> Lightweight, corrosion resistant
  • 6061-T6 (structural)
  • 7075-T6 (aerospace, high strength)
  • 2024 (aircraft structures)</li>
<li><strong>Titanium:</strong> High strength-to-weight, corrosion resistant
  • Ti-6Al-4V (aerospace, medical)</li>
<li><strong>Composites:</strong> Carbon fiber, fiberglass, Kevlar</li>
<li><strong>Polymers:</strong> ABS, Nylon, PEEK, Polycarbonate</li>
</ul>

<strong>Material Properties:</strong>
• Tensile strength
• Yield strength
• Elastic modulus (Young's modulus)
• Hardness (Rockwell, Brinell, Vickers)
• Ductility and toughness
• Thermal conductivity
• Corrosion resistance

<strong>Selection Factors:</strong> Mechanical properties, cost, manufacturability, environmental conditions, weight constraints`
    },

    manufacturing: {
        keywords: ['manufacturing', 'production', 'process', 'fabrication', 'assembly'],
        response: `<strong>Manufacturing Processes</strong> transform raw materials into finished products through various methods.

<strong>Primary Processes:</strong>
<ul>
<li><strong>Casting:</strong> Pouring molten metal into molds
  • Sand casting, die casting, investment casting</li>
<li><strong>Forming:</strong> Shaping materials through deformation
  • Forging, stamping, rolling, extrusion, drawing</li>
<li><strong>Machining:</strong> Material removal
  • Turning, milling, drilling, grinding, sawing</li>
<li><strong>Joining:</strong> Connecting parts
  • Welding (MIG, TIG, Stick, Laser)
  • Brazing, soldering
  • Mechanical fastening (bolts, rivets)
  • Adhesive bonding</li>
<li><strong>Additive Manufacturing:</strong> 3D printing
  • FDM, SLA, SLS, DMLS, binder jetting</li>
</ul>

<strong>Sheet Metal Processes:</strong>
• Bending, punching, laser cutting, waterjet cutting
• Stamping, deep drawing

<strong>Surface Finishing:</strong>
• Anodizing, plating, painting, powder coating
• Polishing, sandblasting`
    },

    lean: {
        keywords: ['lean', 'lean manufacturing', 'continuous improvement', 'kaizen', 'six sigma', '5s', 'waste'],
        response: `<strong>Lean Manufacturing</strong> is a systematic method for waste minimization and value maximization in manufacturing systems.

<strong>7 Types of Waste (TIMWOOD):</strong>
<ul>
<li><strong>T</strong>ransportation - Unnecessary movement of materials</li>
<li><strong>I</strong>nventory - Excess products and materials</li>
<li><strong>M</strong>otion - Unnecessary movement of people</li>
<li><strong>W</strong>aiting - Idle time</li>
<li><strong>O</strong>verproduction - Producing more than needed</li>
<li><strong>O</strong>verprocessing - More work than required</li>
<li><strong>D</strong>efects - Errors requiring rework</li>
</ul>

<strong>Key Lean Tools:</strong>
<ul>
<li><strong>5S:</strong> Sort, Set in Order, Shine, Standardize, Sustain</li>
<li><strong>Kaizen:</strong> Continuous improvement</li>
<li><strong>Kanban:</strong> Visual scheduling system</li>
<li><strong>Value Stream Mapping:</strong> Process visualization</li>
<li><strong>Poka-Yoke:</strong> Error-proofing</li>
<li><strong>JIT:</strong> Just-in-Time production</li>
<li><strong>TPM:</strong> Total Productive Maintenance</li>
</ul>

<strong>Benefits:</strong> Reduced lead time, lower costs, improved quality, increased productivity, better workspace organization`
    },

    fluid: {
        keywords: ['fluid mechanics', 'fluid', 'hydraulics', 'pneumatics', 'flow', 'bernoulli', 'reynolds'],
        response: `<strong>Fluid Mechanics</strong> studies the behavior of fluids (liquids and gases) at rest and in motion.

<strong>Key Principles:</strong>
<ul>
<li><strong>Bernoulli's Equation:</strong> P + ½ρv² + ρgh = constant
  Relates pressure, velocity, and elevation</li>
<li><strong>Reynolds Number:</strong> Re = ρvD/μ
  Predicts flow regime (laminar vs turbulent)</li>
<li><strong>Continuity Equation:</strong> A₁v₁ = A₂v₂
  Conservation of mass in flow</li>
<li><strong>Navier-Stokes Equations:</strong> Govern fluid motion</li>
</ul>

<strong>Applications:</strong>
<ul>
<li><strong>Hydraulics:</strong> Liquid power transmission
  • Hydraulic cylinders, pumps, valves
  • Excavators, presses, brake systems</li>
<li><strong>Pneumatics:</strong> Compressed air systems
  • Actuators, air tools, conveying</li>
<li><strong>Pumps:</strong> Centrifugal, positive displacement
<li><strong>Turbomachinery:</strong> Turbines, compressors, fans</li>
</ul>

<strong>Flow Types:</strong> Laminar (smooth), turbulent (chaotic), compressible, incompressible, viscous, inviscid`
    },

    gdt: {
        keywords: ['gdt', 'geometric dimensioning and tolerancing', 'tolerance', 'engineering drawing', 'blueprint'],
        response: `<strong>GD&T</strong> (Geometric Dimensioning and Tolerancing) is a symbolic language on engineering drawings to define part geometry and tolerances.

<strong>Key Symbols:</strong>
<ul>
<li><strong>Form Controls:</strong>
  • Straightness ⏤
  • Flatness ⏥
  • Circularity ○
  • Cylindricity ⌭</li>
<li><strong>Orientation Controls:</strong>
  • Perpendicularity ⊥
  • Parallelism ∥
  • Angularity ∠</li>
<li><strong>Location Controls:</strong>
  • Position ⊕
  • Concentricity ◎
  • Symmetry ⌯</li>
<li><strong>Profile Controls:</strong>
  • Profile of a line ⌒
  • Profile of a surface ⌓</li>
<li><strong>Runout Controls:</strong>
  • Circular runout ↗
  • Total runout ↗↗</li>
</ul>

<strong>Datums:</strong> Reference features (
