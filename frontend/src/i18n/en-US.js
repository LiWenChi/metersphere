export default {
  commons: {
    delete_cancelled: 'Delete cancelled',
    workspace: 'Workspace',
    organization: 'Organization',
    setting: 'Setting',
    project: 'Project',
    about_us: 'About Us',
    current_project: 'Current Project',
    name: 'Name',
    description: 'Description',
    clear: 'Clear',
    save: 'Save',
    save_success: 'Saved successfully',
    delete_success: 'Deleted successfully',
    modify_success: 'Modify Success',
    copy_success: 'Copy Success',
    delete_cancel: 'Deleted Cancel',
    confirm: 'Confirm',
    cancel: 'Cancel',
    prompt: 'Prompt',
    operating: 'Operating',
    input_limit: 'Within {0} and {1} characters',
    login: 'Sign In',
    welcome: 'Welcome back, please enter username and password to log in to MeterSphere',
    username: 'Username',
    password: 'Password',
    input_username: 'Please enter username',
    input_password: 'Please enter password',
    test: 'Test',
    create_time: 'Created Time',
    update_time: 'Updated Time',
    add: 'Add',
    member: 'Member',
    email: 'Email',
    phone: 'Phone',
    role: 'Role',
    personal_info: 'Personal Info',
    status: 'Status',
    show_all: 'Show All',
    show: 'Show',
    report: 'Report',
    user: 'User',
    system: 'System',
    personal_setting: 'Personal Setting',
    test_resource_pool: 'Resource Pool',
    system_setting: 'Settings',
    api: 'API',
    performance: 'Performance',
    functional: 'Functional test',
    input_content: 'Please enter content',
    create: 'Create',
    edit: 'Edit',
    copy: 'Copy',
    refresh: 'Refresh',
    remark: 'Remark',
    delete: 'Delete',
    not_filled: 'Not filled',
    please_select: 'Please select',
    search_by_name: 'Search by name',
    personal_information: 'Personal Information',
    exit_system: 'Exit System',
    verification: 'Verification',
    system_parameter_setting: 'System Parameter Setting',
    connection_successful: 'Connection successful',
    connection_failed: 'Connection failed',
    save_failed: 'Saved failed',
    host_cannot_be_empty: 'Host cannot be empty',
    port_cannot_be_empty: 'Port cannot be empty',
    account_cannot_be_empty: 'Account cannot be empty',
    title: 'Title',
    custom: 'Custom',
    select_date: 'Select date',
    calendar_heatmap: 'Calendar Heatmap',
    months_1: 'Jan',
    months_2: 'Feb',
    months_3: 'Mar',
    months_4: 'Apr',
    months_5: 'May',
    months_6: 'Jun',
    months_7: 'Jul',
    months_8: 'Aug',
    months_9: 'Sep',
    months_10: 'Oct',
    months_11: 'Nov',
    months_12: 'Dec',
    weeks_0: 'Sun',
    weeks_1: 'Mon',
    weeks_2: 'Tues',
    weeks_3: 'Wed',
    weeks_4: 'Thur',
    weeks_5: 'Fri',
    weeks_6: 'Sat',
    test_unit: 'tests',
    remove: 'Remove',
    remove_cancel: 'Remove Cancel',
    remove_success: 'Remove Success',
    tips: 'The authentication information has expired, please login again',
    not_performed_yet: 'Not performed yet',
    incorrect_input: 'Incorrect input',
    delete_confirm: 'Please enter the following to confirm deletion:',
    login_username: 'ID or email',
    input_login_username: 'Please input the user ID or email',
    input_name: 'Please enter name',
    please_save: 'Please save first',
    formatErr: 'Format Error',
    id: 'ID',
    please_upload: 'Please upload file',
    date: {
      select_date: 'Select date',
      start_date: 'Start date',
      end_date: 'End date',
      select_date_time: 'Select date and time',
      start_date_time: 'Start date and time',
      end_date_time: 'End date time',
      range_separator: "To",
      data_time_error: "Start date cannot be later than the end date",
    },
    trigger_mode: {
      name: "Trigger Mode",
      manual: "Manual trigger",
      schedule: "Scheduled Task",
      api: "API call"
    },
    adv_search: {
      title: 'Advanced Search',
      combine: 'Combined query',
      test: "Test",
      project: "Project",
      search: "Query",
      reset: "Reset",
      and: 'All',
      or: 'any one',
      operators: {
        like: "Contains",
        not_like: "Not included",
        in: "Belong to",
        not_in: "Not belonging",
        gt: ">",
        ge: ">=",
        lt: "<",
        le: "<=",
        equals: "=",
        between: "Between",
        current_user: "Current user"
      }
    }
  },
  workspace: {
    create: 'Create Workspace',
    update: 'Update Workspace',
    delete: 'Delete Workspace',
    delete_confirm: 'Deleting the workspace will delete all resources (such as related projects, test cases, etc.) under the workspace. Are you sure you want to delete?',
    add: 'Add Workspace',
    input_name: 'Please enter a workspace name',
    search_by_name: 'Search by name',
    organization_name: 'Organization Name',
    please_choose_organization: 'Please Choose Organization',
    please_select_a_workspace_first: 'Please select a workspace first!',
    none: 'None Workspace',
    select: 'Select Workspace',
    special_characters_are_not_supported: 'Incorrect format (special characters are not supported and cannot end with \'-\')',

  },
  organization: {
    create: 'Create Organization',
    modify: 'Modify',
    delete: 'Delete Organization',
    delete_confirm: 'Deleting this organization will delete all resources (such as related workspaces, projects, test cases, etc.) under this organization. Are you sure you want to delete?',
    input_name: 'Please enter a organization name',
    select_organization: 'Please select organization',
    search_by_name: 'Search by name',
    special_characters_are_not_supported: 'Incorrect format (special characters are not supported and cannot end with \'-\')',
    none: 'None Organization',
    select: 'Select Organization',


  },
  project: {
    name: 'Project name',
    recent: 'Recent Projects',
    create: 'Create Project',
    edit: 'Edit Project',
    delete: 'Delete project',
    delete_confirm: 'Deleting this project will delete all test resources under this project. Are you sure you want to delete?',
    delete_tip: 'Deleting this project will delete all test resources under this project. Are you sure you want to delete?',
    search_by_name: 'Search by name',
    input_name: 'Please enter a workspace name',
    owning_workspace: 'Owning Workspace',
    please_choose_workspace: 'Please select Workspace',
    special_characters_are_not_supported: 'Incorrect format (special characters are not supported and cannot end with \'-\')',
  },
  member: {
    create: 'Create',
    modify: 'Modify',
    delete_confirm: 'Are you sure you want to delete this Member?',
    please_choose_member: 'Please Choose Member',
    search_by_name: 'Search by name',
    modify_personal_info: 'Modify Personal Information',
    edit_password: 'Edit Password',
    edit_information: 'Edit Information',
    input_name: 'Please enter a user name',
    input_email: 'Please enter a email',
    special_characters_are_not_supported: 'Special characters are not supported',
    mobile_number_format_is_incorrect: 'Mobile number format is incorrect',
    email_format_is_incorrect: 'Email format is incorrect',
    password_format_is_incorrect: 'Valid password: 8-16 digits, English upper and lower case letters + numbers + special characters (optional)',
    old_password: 'Old Password',
    new_password: 'New Password',
    remove_member: 'Are you sure you want to remove this member',
    input_id_or_email: 'Please enter user ID, or user Email',
    no_such_user: 'Without this user information, please enter the correct user ID or user Email!',
  },
  user: {
    create: 'Create',
    modify: 'Modify',
    input_name: 'Please enter a user name',
    input_id: 'Please enter a ID',
    input_email: 'Please enter a email',
    input_password: 'Please enter a password',
    input_phone: 'Please enter phone number',
    special_characters_are_not_supported: 'Special characters are not supported',
    mobile_number_format_is_incorrect: 'Mobile number format is incorrect',
    email_format_is_incorrect: 'Email format is incorrect',
    delete_confirm: 'Are you sure you want to delete this User?',
    apikey_delete_confirm: 'Are you sure you want to delete this API Key?',
    input_id_placeholder: 'Please enter ID (only supports numbers and English letters)',
    source: 'Source'
  },
  role: {
    please_choose_role: 'Please Choose Role',
    admin: 'Admin',
    org_admin: 'Org_Admin',
    test_manager: 'Test Manager',
    test_user: 'Test User',
    test_viewer: 'Read-only User',
    add: 'Add Role',
  },
  report: {
    recent: 'Recent Report',
    search_by_name: 'Search by Name',
    test_name: 'Test',
    test_overview: 'Test Overview',
    test_request_statistics: 'Test Request Statistics',
    test_error_log: 'Test Error Log',
    test_log_details: 'Test Log Details',
    test_details: 'Test Details',
    test_duration: 'Test Duration：{0} minutes {1} seconds',
    test_start_time: 'Test Start Time',
    test_end_time: 'Test End Time',
    test_stop_now: 'Test Stop Now',
    test_stop_now_confirm: 'Are you sure you want to stop the current test immediately?',
    test_rerun_confirm: 'Are you sure you want to rerun the current test immediately?',
    test_stop_success: 'Test stop successfully',
    test_execute_again: 'Test Execute Again',
    export: 'Export',
    compare: 'Compare',
    generation_error: 'Report generation error, cannot be viewed!',
    being_generated: 'Report is being generated...',
    delete_confirm: 'Confirm delete: ',
    start_status: 'The test is starting, please check the report later!',
    run_status: 'The test is running, please check the report later！',
    user_name: 'Creator',
    project_name: 'Project Name'
  },
  load_test: {
    operating: 'Operating',
    pressure_prediction_chart: 'Pressure Prediction Chart',
    recent: 'Recent Tests',
    search_by_name: 'Search by name',
    project_name: 'Project',
    delete_confirm: 'Are you sure want to delete test: ',
    input_name: 'Please enter name',
    select_project: 'Please select project',
    save_and_run: 'Save and execute',
    basic_config: 'Scene Configuration',
    pressure_config: 'Pressure configuration',
    advanced_config: 'Advanced Configuration',
    runtime_config: 'Runtime Configuration',
    is_running: 'Test is running! ',
    test_name_is_null: 'Test name cannot be empty! ',
    project_is_null: 'Project cannot be empty! ',
    jmx_is_null: 'Must contain a JMX file, and can only contain a JMX file!',
    file_name: 'File name',
    file_size: 'File size',
    file_type: 'File Type',
    file_status: 'File Status',
    last_modify_time: 'Modify time',
    upload_tips: 'Drag files here, or <em> click to upload </em>',
    upload_type: 'Only JMX/CSV files can be uploaded',
    related_file_not_found: "No related test file found!",
    delete_file_confirm: 'Confirm delete file:',
    file_size_limit: "The number of files exceeds the limit！",
    delete_file: "The file already exists, please delete the file with the same name first!",
    thread_num: 'Concurrent users:',
    input_thread_num: 'Please enter the number of threads',
    duration: 'Duration time (minutes):',
    input_duration: 'Please enter a duration',
    rps_limit: 'RPS Limit:',
    input_rps_limit: 'Please enter a limit',
    ramp_up_time_within: 'In',
    ramp_up_time_minutes: 'minutes, separate',
    ramp_up_time_times: 'add concurrent users',
    advanced_config_error: 'Advanced configuration verification failed',
    domain_bind: 'Domain bind',
    domain: 'Domain',
    enable: 'Enable',
    ip: 'IP',
    params: 'Parameters',
    param_name: 'Name',
    param_value: 'Value',
    domain_is_duplicate: 'Domain is duplicated',
    param_is_duplicate: 'Parameter name is duplicate',
    domain_ip_is_empty: 'Domain and IP cannot be empty',
    param_name_value_is_empty: 'Parameters cannot be empty',
    connect_timeout: 'Timeout to establish a connection',
    custom_http_code: 'Custom HTTP response success status code',
    separated_by_commas: 'Separated by commas',
    create: 'Create Test',
    select_resource_pool: 'Please Select Resource Pool',
    resource_pool_is_null: 'Resource Pool is empty',
    download_log_file: 'Download',
    user_name: 'Creator',
    special_characters_are_not_supported: 'Test name does not support special characters',
    pressure_config_params_is_empty: 'Pressure configuration parameters cannot be empty!',
    schedule_tip: 'The interval must not be less than the pressure measuring time'
  },
  api_test: {
    creator: "Creator",
    save_and_run: "Save and Run",
    run: "Run",
    running: "Running",
    reset: "Rest",
    input_name: "Please enter the test name",
    select_project: "Please select project",
    variable_name: "Variable name",
    copied: "copied",
    key: "Key",
    value: "Value",
    create_performance_test: "Create Performance Test",
    export_config: "Export",
    environment: {
      name: "Environment Name",
      socket: "Socket",
      globalVariable: "Global Variable",
      environment_list: "Environment List",
      environment_config: "Environment Config",
      config_environment: "Config Environment",
      environment: "Environment",
      select_environment: "Please select environment",
      please_save_test: "Please Save Test First",
    },
    scenario: {
      dubbo: "Dubbo Config",
      config: "Scenario Config",
      input_name: "Please enter the scenario name",
      name: "Scenario Name",
      base_url: "Base URL",
      base_url_description: "Base URL as URL prefix for all requests",
      url_invalid: "Invalid URL",
      variables: "Variables",
      headers: "Headers",
      kv_description: "Variables are available for all requests",
      copy: "Copy scenario",
      delete: "Delete scenario"
    },
    request: {
      copy: "Copy request",
      delete: "Delete request",
      input_name: "Please enter the request name",
      input_url: "Please enter the request URL",
      input_path: "Please enter the request path",
      name: "Name",
      method: "Method",
      url: "URL",
      path: "Path",
      address: "Address",
      refer_to_environment: "Use Environment",
      please_configure_environment_in_scenario: "Please Configure Environment In The Scenario",
      please_add_environment_to_scenario: "Please Add The Environment Configuration To The Scenario First",
      url_description: "etc: https://fit2cloud.com",
      path_description: "etc：/login",
      parameters: "Query parameters",
      parameters_desc: "Parameters will be appended to the URL e.g. https://fit2cloud.com?Name=Value&Name2=Value2",
      headers: "Headers",
      body: "Body",
      body_kv: "Key Value",
      body_text: "Raw",
      assertions: {
        label: "Assertion",
        text: "Text",
        regex: "Regex",
        response_time: "Response Time",
        select_type: "Choose type",
        select_subject: "Subject",
        select_condition: "Condition",
        contains: "Contains",
        not_contains: "Not contains",
        equals: "Equals",
        start_with: "Start with",
        end_with: "End With",
        value: "Value",
        expression: "Expression",
        response_in_time: "Response in time",
      },
      extract: {
        label: "Extract from response",
        select_type: "Choose type",
        description: "Extract data from the response and store it in variables. Use the variables in subsequent requests.",
        regex: "Regex",
        regex_expression: "Regular expression",
        json_path_expression: "JSONPath expression",
        xpath_expression: "XPath expression",
      },
      dubbo: {
        protocol: "protocol",
        input_interface: "Please enter the interface",
        input_method: "Please enter the method",
        input_config_center: "Please enter the config center",
        input_registry_center: "Please enter the registry center",
        input_consumer_service: "Please enter the consumer & service",
        check_registry_center: "Can't get interface list, please check the registry center",
      }
    },
    api_import: {
      label: "Import",
      title: "API test import",
      data_format: "Data format",
      file_size_limit: "The file size does not exceed 20 M",
      tip: "Instructions",
      export_tip: "Export Tip",
      ms_tip: "Support for MeterSphere JSON format",
      ms_export_tip: "Export jSON-formatted files via MeterSphere website or browser plug-ins",
      swagger_tip: "Only Swagger2.x json files are supported",
      postman_tip: "Only Postman Collection V2.1 json files are supported",
      postman_export_tip: "Export the test collection by Postman",
      swagger_export_tip: "Export jSON-formatted files via Swagger website",
      suffixFormatErr: "The file format does not meet the requirements",
    }
  },
  api_report: {
    title: "Report",
    request: "Request",
    request_body: "Body",
    request_headers: "Headers",
    request_cookie: "Cookie",
    response: "Response",
    delete_confirm: 'Confirm delete : ',
    scenario_name: "Scenario name",
    response_time: "Response time(ms)",
    latency: "Latency",
    request_size: "Request Size",
    response_size: "Response Size",
    response_code: "Response Code",
    response_message: "Response Message",
    error: "Error",
    assertions: "Assertions",
    assertions_pass: "Passed Assertions",
    assertions_name: "Assertion Name",
    assertions_error_message: "Error Message",
    assertions_is_success: "Fail/Success",
    result: "Result",
    success: "Success",
    fail: "Fail",
    total: "Total",
    test_name: "Test",
    request_result: "Result",
    sub_result: "Sub Result",
    detail: "Report detail",
    delete: "Delete report",
  },
  test_track: {
    test_track: "Track",
    confirm: "Confirm",
    cancel: "Cancel",
    project: "Project",
    save: "Save",
    return: "Return",
    length_less_than: "The length less than",
    recent_plan: "Recent plan",
    recent_case: "Recent case",
    pass_rate: "Pass rate",
    execution_result: ": Please select the execution result",
    actual_result: ": The actual result is empty",
    case: {
      test_case: "Case",
      move: "Move case",
      case_list: "Test case list",
      create_case: "Create case",
      edit_case: "Edit case",
      view_case: "Test case",
      no_project: "There is no project in this workspace, please create the project first",
      priority: "Priority",
      type: "Type",
      method: "Method",
      auto: "Auto",
      manual: "Manual",
      create: "Create test case",
      case_type: "Case Type",
      name: "Test case name",
      module: "Module",
      maintainer: "Maintainer",
      steps: "Steps",
      number: "Number",
      prerequisite: "Prerequisite",
      step_desc: "Step describe",
      expected_results: "Expected results",
      input_name: "Please enter name",
      input_module: "Please select module",
      input_maintainer: "Please select maintainer",
      input_priority: "Please select priority",
      input_type: "Please select type",
      input_method: "Please select method",
      input_prerequisite: "Please select prerequisite",
      delete_confirm: "Confirm delete test case",
      delete: "Delete case",
      save_create_continue: "Save and create continue",
      please_create_project: "No project available, please create the project first",
      create_module_first: "Please create module first",
      relate_test: "Relate test",
      relate_test_not_find: 'The associated test does not exist, please check the test case',
      import: {
        import: "Import test case",
        case_import: "Import test case",
        download_template: "Download template",
        click_upload: "Upload",
        upload_limit: "Only XLS/XLSX files can be uploaded, and no more than 20M",
        upload_limit_count: "Only one file can be uploaded at a time",
        upload_limit_format: "Upload files can only be XLS, XLSX format!",
        upload_limit_size: "Upload file size cannot exceed 20MB!",
        success: "Import success！",
        importing: "Importing...",
      },
      export: {
        export: "Export cases"
      }
    },
    plan: {
      test_plan: "Plan",
      create_plan: "Create test plan",
      edit_plan: "Edit test plan",
      plan_name: "Test plan name",
      plan_project: "Project",
      plan_stage: "Stage",
      plan_status: "Status",
      smoke_test: "Smoke test",
      functional_test: "Functional test",
      integration_testing: "Integration test",
      system_test: "System test",
      regression_test: "Regression test",
      version_validation: "Version validation",
      plan_principal: "Principal",
      input_plan_name: "Please input plan name",
      input_plan_principal: "Please select principal",
      input_plan_project: "Please select project",
      input_plan_stage: "Please select stage",
      plan_status_prepare: "Not started",
      plan_status_running: "Starting",
      plan_status_completed: "Completed",
      plan_delete_confirm: "All use cases under this plan will be deleted,confirm delete test plan: ",
      plan_delete: "Delete test plan",
    },
    module: {
      search: "Search module",
      rename: "Rename",
      add_submodule: "Add submodule",
      add_module: "Add module",
      name: "Name",
      delete_confirm: "Confirm delete module:",
      delete_all_resource: "and all submodules and test cases under the module",
      module: "Module",
    },
    home: {
      recent_test: "Recent test",
      my_plan: "My plan",
      test_rate: "Test rate",
      tested_case: "Tested case",
    },
    plan_view: {
      plan: "Plan",
      relevance_test_case: "Relevance case",
      executor: "Executor",
      execute_result: "Result",
      pass: "Pass",
      failure: "Failure",
      blocking: "Blocking",
      skip: "Skip",
      actual_result: "Actual result",
      step_result: "Step result",
      my_case: "My case",
      all_case: "All case",
      pre_case: "The last case",
      next_case: "The next case",
      change_execution_results: "Change results",
      change_executor: "Change executor",
      select_executor: "Select executor",
      select_execute_result: "Select execute result",
      cancel_relevance: "Cancel relevance",
      confirm_cancel_relevance: "Confirm cancel relevance",
      select_manipulate: "Select the data you want to manipulate",
      select_template: "Select template",
      step: "Step",
      submit_issues: "Commit issues",
      operate_step: "Operate step",
      edit_component: "Edit component",
      base_info: "Base info",
      test_result: "Test result",
      result_distribution: "Result distribution",
      custom_component: "Custom",
      create_report: "Create report",
      view_report: "View report",
      component_library: "Component library",
      component_library_tip: "Drag and drop the component from the component library, add to the right, preview the report effect, only one can be added per system component.",
      delete_component_tip: "Please reserve at least one component",
      input_template_name: "Input template name",
      template_special_characters: 'Template name does not support special characters',
      case_count: "Case count",
      issues_count: "Issues count",
      result_statistics: "Result statistics",
      result_statistics_chart: "Result statistics chart",
      create_template: "Create template",
      report_template: "Report template",
      test_detail: "Test detail",
      failure_case: "Failure case",
    }
  },
  test_resource_pool: {
    type: 'type',
    enable_disable: 'Enable / disable',
    search_by_name: 'Search by name',
    create_resource_pool: 'Create resource pool',
    update_resource_pool: 'Create resource pool',
    select_pool_type: 'Select resource type',
    max_threads: 'Maximum concurrent number',
    input_pool_name: 'Please enter the resource pool name',
    pool_name_valid: 'Resource pool name does not support special characters',
    cannot_remove_all_node: 'Cannot delete all independent nodes',
    cannot_empty: 'Resource pool cannot be empty',
    fill_the_data: 'Please complete the data',
    delete_prompt: 'This operation will permanently delete the resource pool, continue?',
    status_change_success: 'Successfully changed the status!',
    status_change_failed: 'Failed to change the status, resource pool is invalid!',
    check_in: 'Check in',
  },
  system_parameter_setting: {
    mailbox_service_settings: 'Mailbox Settings',
    ldap_setting: 'LDAP Setting',
    test_connection: 'Test connection',
    SMTP_host: 'SMTP host',
    SMTP_port: 'SMTP port',
    SMTP_account: 'SMTP account',
    SMTP_password: 'SMTP password',
    SSL: 'Turn on SSL (if the SMTP port is 465, you usually need to enable SSL)',
    TLS: 'Turn on TLS (if the SMTP port is 587, you usually need to enable TLS)',
    SMTP: 'Anonymous SMTP or not',
    host: 'Host number cannot be empty',
    port: 'Port cannot be empty',
    account: 'Account cannot be empty',

  },
  i18n: {
    home: 'Home'
  },
  ldap: {
    url: 'LDAP URL',
    dn: 'Bind DN',
    password: 'Password',
    ou: 'User OU',
    filter: 'User Filter',
    mapping: 'LDAP Mapping',
    open: 'Enable LDAP Authentication',
    input_url: 'Please enter LDAP url',
    input_dn: 'Please enter DN',
    input_password: 'Please enter the password',
    input_ou: 'Please enter user OU',
    input_filter: 'Please enter a user filter',
    input_mapping: 'Please enter LDAP attribute mapping',
    input_username: 'please enter user name',
    input_url_placeholder: 'Please enter the LDAP address (eg ldap://localhost:389)',
    input_ou_placeholder: 'Enter user OU (use | to separate each OU)',
    input_filter_placeholder: 'Input filter [Possible options are cn or uid or sAMAccountName={0}, eg: (uid={0})]',
    input_mapping_placeholder: 'eg：{"username":"uid","name":"sn","email":"mail"}, The username mapping option may be cn or uid or sAMAccountName',
    test_connect: 'Test Connection',
    test_login: 'Test Login',
    edit: 'Edit',
    login_success: 'login success',
    url_cannot_be_empty: 'LDAP address cannot be empty',
    dn_cannot_be_empty: 'LDAP DN cannot be empty',
    ou_cannot_be_empty: 'LDAP OU cannot be empty',
    filter_cannot_be_empty: 'LDAP user filter cannot be empty',
    password_cannot_be_empty: 'LDAP password cannot be empty',
    mapping_cannot_be_empty: 'LDAP mapping cannot be empty',
  },
  schedule: {
    not_set: "Not Set",
    next_execution_time: "Next Execution Time",
    edit_timer_task: "Edit Timer Task",
    please_input_cron_expression: "Please Input Cron Expression",
    generate_expression: "Generate Expression",
    cron_expression_format_error: "Cron Expression Format Error",
    cron_expression_interval_short_error: "Interval time shorter than 3 minutes, please avoid running tests that take too long",
    cron: {
      seconds: "Seconds",
      minutes: "Minutes",
      hours: "Hours",
      day: "Day",
      month: "Month",
      weeks: "Weeks",
      years: "Years",
      week: "Week",
      time_expression: "Time Expression",
      complete_expression: "Complete Expression",
      allowed_wildcards: "Allowed Wildcards[, - * /]",
      day_allowed_wildcards: "Allowed Wildcards[, - * / L M]",
      weeks_allowed_wildcards: "Allowed Wildcards[, - * / L M]",
      not_specify: "Not Specify",
      specify: "Specify",
      period: "Period",
      from: "From",
      every: "Every",
      day_unit: "Day Unit",
      start: "Start",
      execute_once: "Execute Once",
      last_working_day: "The Last Working Day",
      last_day_of_the_month: "The Last Day Of The Month",
      multi_select: "Multi Select",
      num: "Number",
      week_of_weeks: "Week Of Weeks",
      last_week_of_the_month: "The Last Week Of The Month",
      not_fill: "Not Fill",
      recent_run_time: "Recent 5th Runing Time",
      no_qualifying_results: "No Qualifying Results",
    }
  },
};
